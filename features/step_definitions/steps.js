import { Given,When, Then } from "@cucumber/cucumber";
import axios from 'axios';
import assert from "assert";

let response;
let responseTime;
let errorResponse;
let liveEpisodeCount = 0;

//--------Scenario:1 -------------------
Given('I make a GET request to {string}', async function (url) {
  const start = Date.now();
  response = await axios.get(url);
  responseTime= Date.now() - start;
});

Then('the response should have status code {int}', function (statusCode) {
  assert.strictEqual(response.status, statusCode);
});

Then('the response time should be less than {float} milliseconds', function (maxTime) {
  assert(responseTime < maxTime, `Expected response time to be below ${maxTime} ms. The actual resonse time is ${responseTime} ms`);
});


//---------Scenario:2 -------------------
Then('the {string} attribute should not be null or empty for all 4 items present in the data array', function (field) {
  const data = response.data;
  data.schedule.elements.forEach(item => {
      assert(item[field] !== null && item[field] !== '', `${field} should not be null or empty`);
  });
});

Then('the type attribute should be episode for all items', function () {
  const items = response.data;
  items.schedule.elements.forEach(item => {
    assert(item.episode.type === 'episode', 'Type in episode is not "episode"');
  });
});


//-------------Scenario:3 --------------
Then('the title field in episode should never be null or empty for any schedule item', function () {
  const data = response.data;
  data.schedule.elements.forEach(item => {
      assert(item.episode.title !== null && item.episode.title !== '', `episode.title should not be null or empty`);
  });
});

//------------- Scenario:4 --------------
Then('only one episode in the list should have live field in episode as true', () => {
  const data = response.data;
  data.schedule.elements.forEach((item) => {
    if (item.episode.live)liveEpisodeCount++;
  });
  assert.strictEqual(liveEpisodeCount, 1, 'There should be exactly one live episode');
});


//----------- Scenario:5 -----------------

Then('the transmission_start date for each item should be before the transmission_end date', () => {
  const data = response.data;
  data.schedule.elements.forEach((item) => {
    const startDate = new Date(item.transmission_start);
    const endDate = new Date(item.transmission_end);
    assert.ok(startDate < endDate, 'Start date is not before end date for item');
  });
});

//-----------Scenario:6 -------------------
Then('the response should have a Date header', () => {
  //console.log(response.headers);
  assert.ok(response.headers.hasOwnProperty('date'), 'Missing date header in response');
  
});

//-----------Scenario:7 --------------------
Given('I make a invalid GET request to {string}', async (url) => {
  try {
    await axios.get(url);
  } catch (error) {
    errorResponse = error.response;
  }
});

Then('the status code should be 404', () => {
  assert.strictEqual(errorResponse.status, 404, 'Unexpected status code');
});

Then('the error object should have properties details and http_response_code', () => {
  //console.log(errorResponse.data);
  assert.ok(errorResponse.data.error.hasOwnProperty('details'), 'Missing details property in error');
  assert.ok(errorResponse.data.error.hasOwnProperty('http_response_code'), 'Missing http_response_code property in error');
});
