This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My approach

I decided to use next.js as a chance to use a new framework as an opportunity to learn something new. I also had read that this would make it easy to deploy to Vercel as a static hosting provider.

The deployment can be found at https://fora-operations-manager-git-master-alipollocks-projects.vercel.app/

Further to this I understood that Next would give me a way to build in mockAPI routes easily within the app which is what I have done.

I used Mobx Stores for app level state management because it's what I currently use day to day and bootstrap to style for the same reasons.

I'm not sure these are the best tools to use, however given the timeframe and my familiarity with them along with using Next.js for the first time I decided it would be as sensible choice.

## Mobx

Mobx is useful because it tracks store changes throughout the app and will trigger rerenders of components which observe any variables within the store that have the @observable decorator or the store itself.

Meaning that less local state is required in components and the components can be 'dumb' whilst allowing the logic to sit in specific files in the app. I tried to do this generally as am used to doing, however

some of my components aren't dumb enough for my liking and with more time I would refactor the various parts of state logic out of tsx components and into ts models or stores. I would also ideally split the store up into different stores for different sections and purposes.

I have also been a bit too liberal with prop drilling throughout and just passed the store around which isn't ideal. With more time I would pass the minimum amount of data down each path.

## The App

The structure of the app is of course very basic and messy, I tried to keep things sectioned but given I was trying to build quickly to a reasonable point the larger structures are not particularly modular.

I built from the top down and refactored or create UI components as and when they were needed, however in a production environment it would be much more beneficial to build components from the ground up in a sandbox and then construct the app from the modular pieces.

There are plenty of bugs in the code as I'm sure you will find and the styling is very approximate with it effectively not dealing at all with small viewport sizes, ideally I would have different versions of the large page areas for different devices which would be built from

combinations of the modular components.

Currently the main home page is the only one built with mock data populating the cards, and the dropdown queryies the mockAPI to update the data for the location selected. The data is limited and for locations with a lack of data, the structure of the view breaks down.

I implemented some logic for different pages selected on the left side bar but did not build out much on the other pages. I also inserted a static bar on the right, however I did not get round to have it act like a drawer as the mockup shows.
