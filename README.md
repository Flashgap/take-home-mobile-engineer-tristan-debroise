# Mobile Engineer Take-home exercise

This take-home exercise focuses on a key aspect of many dating applications: the swipe gesture.

**Demo:**

https://www.loom.com/share/0ca44c71e8c7452db133f07567ef840f

## Goals

You are to reproduce the same application as shown in the video above. This exercise should take you a couple of hours to complete. However, if you think you'll need more time either let us know at the beginning or while developping it. Different developers code at different speeds, but quality code comes from: good abstractions, good namings, good comments.

Below are some of the product and technical requirements, as well as some stretch goals.

### Product goals

**Must have:**

- [ ] Must display the app's header in the **Home** (see Figma).
- [ ] Must display a deck of cards representing user profiles in the **Home** (see Figma).
- [ ] Must display an action bar including the dislike and like actions in the **Home** (see Figma).
- [ ] Must handle the swipe right/left gestures and animations in the **Home** (see Loom):
  - [ ] The top card should follow the approximative movements shown in the video (aim for what you consider a good user experience, do not try to replicate at all costs the movements shown in the video).
  - [ ] The background card should fade in/out and scale down/up, in parallel to the top card (see Loom).
- [ ] The top card must be clickable and lead to the detailed **Profile** (see Figma).
- [ ] The **Profile** (see Figma) should contain:
  - [ ] A back action to go back to the deck.
  - [ ] A picture slider.
  - [ ] The complete user details (name, age, distance, bio).

**Stretch goals:**

- [ ] Animate the Like and Dislike buttons (ex: increase scale of the related button depending on the swipe direction).
- [ ] A loading indicator for when the cards are loading.
- [ ] Add a fade in/out color overlay to cards (ex: yellow or green) depending on the swipe direction.

**Extra stretch goals:**

- [ ] When liking a user, a random `matched: boolean` property is returned. When `true`, display a small visual feedback showing the mutual match event.

### Technical goals

To ensure consistency, your project will have to follow the technical requirements listed below:

- Must run with the `yarn ios` command.
- Must run on iOS `15.0` or higher.
- Must run on an iPhone 13.
- Great usage of TypeScript (ex: clean interfaces/types, good abstractions, clean props).
- **DO NOT USE** any library for the cards deck. Re-inventing the wheel is something we usually avoid, but here we want full control of its behaviour and we do not want to rely on a third-party.

## Running the project

The project requires:

- XCode to be installed and updated to the latest version.
- Yarn to be installed and updated to the latest version.

To make sure that you have all dependencies correctly installed, follow the official documentation: https://reactnative.dev/docs/environment-setup.

Once everything is setup, run the simulator with `yarn ios`.

It should launch the iPhone 13 simulator running iOS 15.0 and launch the app afterward. The project includes hot-reloading, and any change made to the project's `app/` folder should automatically refresh the app.

## Resources

Here are some resources and information that you might need during development.

### Dependencies

This project comes with pre-installed packages that you are free to use or not. They are given for guidance, but if you think that you are better doing things yourself, do not hesitate to do so, but keep in mind that you'll be asked why.

- `@react-navigation/*`: to handle the app's navigation and screens.
- `nanoid`: to generate the users' ids.
- `react-native-gesture-handler`: to handle gestures in the application.
- `react-native-image-slider-box`: a simple image slider.
- `react-native-status-bar-height`: utility to have a universal status bar height API over all devices.

### Documentation

- **Figma**: https://www.figma.com/file/ZQOPveo4OM1rMFfWHaHe2V/Fruitz---Senior-Mobile-Engineer?node-id=11%3A1053 (account required to select individual components)
- Project was created using: https://reactnative.dev/docs/typescript#getting-started-with-typescript
- A small tutorial to guide you through the creation of the Deck: https://iamshadmirza.com/react-native-animation-using-hooks-tinder-cards

### Existing code and structure

The project's `app/` folder already includes some code to help you out:

- `api/`: a mock API helper to fetch and manipulate users.
- `components/`: includes some components that you can use throughout the screens.
- `hooks/`: some basic hooks and contexts.
- `models/`: some data structures used in other parts of the app.
- `screens/`: some of the application's screen.
- `style/`: some constants to help you design the app.
- `utils/`: different helper methods.
