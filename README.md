# HNG_Profile-Card
A simple testable profile card for HNG stage 1b task.

## How to Run Locally

Since this is a static website utilizing pure HTML, CSS, and JavaScript, no complex installation or build processes are required to run it.

1. **Clone the repository** to your local machine.
2. **Open the project**: Simply double-click on the `index.html` file to open it in your default web browser.
3. **For Development (Optional)**: If you intend to make changes, it is highly recommended to use a local development server such as the **Live Server** extension in VS Code for hot-reloading as you edit the files, save yourself the stress of refreshing the page everytime like i did.

## Testing

There are currently no automated unit or integration tests configured for this project. 

Because it's a static UI component, verification is primarily done manually:
- Ensure that the layout properly centers the card components across different screen sizes.
- Verify that hover states, responsive behavior, and any interactive features driven by `scripts/card.js` work correctly in modern browsers.

## Notes about the Repo

- **Architecture**: The project follows a standard structure for static web development, separating logic into appropriate directories (`assets/`, `scripts/`, `styles/`).
- **Styling Method**: Vanilla CSS, no frameworks used.
- **Responsiveness**: Focus has been given to ensuring the card behaves correctly on both mobile and desktop viewports, my blood, sweat and tears was put into this.
