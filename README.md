# Ragna + Caspeco = ✨

This is a tech test where I made a dashboard with four widgets.

- A clock
- An exchange widget that shows the rate for SEK ➡️ EUR
- A memo widget that saves memos to localStorage
- A widget that shows a cute GIF from Giphy's API on the click of a button

## Tech

- React.js
- JSX
- Redux
- Reusable components
- Styled-Components
- Figma

## How I did it

I planned the first three widgets first but had an idea that I wanted to add the fourth one. I did a rough sketch with pen and paper before I started coding. I began with focusing on getting the logic done for one widget at a time. I styled them a little bit along the way because I had an idea of how they should look from the beginning. I chose to finish all logic before working on the layout and responsiveness.
I used Styled-Components to style and media queries to make the website responsive. The button is a reuseable component. I used Figma to draw two icons, the arrow in the exchange widget and the x in the memo widget. 

I did spend a lot of time on how to make the button fetch again to the API. 
There was a problem deploying the website to Netlify when using fixer.io's API. So I chose to change to exchangeratesapi.io. The downside is that it doesn't have a timestamp for the rates, only a date. 


## View it live

The dashboard can be viewed here👀⏰🐯: 
https://o-food-community.netlify.app/