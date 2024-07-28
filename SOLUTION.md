# SOLUTION

## Estimation

Estimated: 5hrs

Spent: 3hrs

## Solution

## Comments on your solution

The workflow for this solution involved me reading through the requirements and envisioning an appropriate UI and logic to employ the solution. Time spent on actual development/coding is 3 hours and 2 hours was spend on ideation. I used Tailwind CSS as I have used this one
in a previous project in which I created a simple appointment system. Used axios for making API calls.

 The solution I present is a simplistic rendition of the the specifications provided. To make the UI as intuitive as possible I employed using radio buttons so user will not needlessly type if it is not required. Rapid filter changes without using an apply filter button makes the user experience seemless. The table displays products in a card form so users can clearly examine each product in the catalogue.


Here are some test cases for the solution
## Test Case 1: Load All Products Successfully
Scenario: User visits the product collection page.

Given the user is on the product collection page,
When the page loads,
Then all products are fetched and displayed successfully,
And the first 4 products are shown.

Conditions of Acceptance:

The product collection page should display a loading indicator while fetching products.
Once products are fetched, the first 4 products should be displayed.
The total number of products should be shown correctly in the pagination component.

## Test Case 2: Apply Filter and Reset Pagination
Scenario: User applies a filter (e.g., "Cat Products").

Given the user is on the product collection page,
And the user has clicked on a filter (e.g., "Cat Products"),
When the filter is applied,
Then the displayed products should update to show only those matching the filter,
And the pagination should reset to the first page.
Conditions of Acceptance:

The filtered products should be displayed correctly.
The filter name should update accordingly (e.g., "Cat Products").
Pagination should reset to page 1 when a new filter is applied.

## Test Case 3: Pagination Functionality
Scenario: User navigates through the product pages using pagination.

Given the user is on the product collection page,
And there are more than 4 products,
When the user clicks on the "Next" button,
Then the next set of 4 products should be displayed,
And the pagination component should update to reflect the current page.
Conditions of Acceptance:

The "Next" button should only be clickable if there are more products to display.
The "Previous" button should only be clickable if the current page is greater than 1.
The pagination component should correctly reflect the current page and total number of products.

Edge Case:

If the user is on the last page and there are fewer than 4 products, the correct number of products should be displayed without errors.


