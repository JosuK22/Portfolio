# Personal | Developer Portfolio

## Preview
<div align="center">
  <img src="./src/assets/Preview/Preview.png" alt="Portfolio Preview" width="600"/>
</div>

## About
This is a React-based Developer Portfolio that can be easily modified.

## Hosted Website
Check out the live version here: [Personal Portfolio](https://josuk22.github.io/Portfolio/).

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your local machine:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
To set up the project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/JosuK22/Portfolio.git
    ```

2. **Navigate to the project directory**
    ```bash
    cd Portfolio
    ```

3. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

4. **Run the application**
    ```bash
    npm start
    # or
    yarn start
    ```

5. **Open the application**
    Open your browser and go to `http://localhost:3000` to view the Portfolio.

## Folder Structure
Here is the basic structure of the project:

```bash
Portfolio
├── node_modules
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   ├── Avatars
│   │   │   ├── avatar_1.png
│   │   │   ├── avatar_2.png
│   │   │   ├── avatar_3.png
│   │   │   ├── avatar_4.png
│   │   │   └── avatar_5.png
│   │   ├── Background
│   │   │   ├── Contact_us-bro.png
│   │   │   ├── skills.png
│   │   │   └── sky.png
│   │   ├── My_Image
│   │   │   ├── Me-1.png
│   │   │   └── Me-2.png
│   │   ├── PNG
│   │   │   ├── Bootstrap.png
│   │   │   ├── CSS.png
│   │   │   ├── express.png
│   │   │   ├── github_us-bro.png
│   │   │   ├── HTML.png
│   │   │   ├── JS.png
│   │   │   ├── MongoBD.png
│   │   │   ├── Node.png
│   │   │   ├── npm.png
│   │   │   ├── Postman.png
│   │   │   ├── React.png
│   │   │   ├── VScode.png
│   │   │   └── Yarn.png
│   │   ├── Preview
│   │   │   └── Preview.png
│   │   ├── Projects
│   │   │   ├── HotelBooking.png
│   │   │   ├── HTML_CSS_Portfolio.png
│   │   │   ├── HTMLGAME.png
│   │   │   ├── NotesApp_2.jpeg
│   │   │   ├── NotesApp.png
│   │   │   ├── PokemonGame.png
│   │   │   └── SupperApp.jpeg
│   │   ├── Resume
│   │   │   └── JOSEPH-K-ANOJ.pdf
│   │   └── SVG
│   │       ├── bootstrap.svg
│   │       ├── css.svg
│   │       ├── figma.svg
│   │       ├── git.svg
│   │       ├── html.svg
│   │       ├── java.svg
│   │       ├── javascript.svg
│   │       ├── materialui.svg
│   │       ├── mongoDB.svg
│   │       ├── mysql.svg
│   │       ├── python.svg
│   │       ├── react.svg
│   │       ├── tailwind.svg
│   │       └── vitejs.svg
│   ├── components
│   │   ├── about
│   │   │   ├── about.css
│   │   │   └── About.jsx
│   │   ├── contact
│   │   │   ├── contact.css
│   │   │   └── Contact.jsx
│   │   ├── footer
│   │   │   ├── footer.css
│   │   │   ├── Footer.jsx
│   │   │   └── time.jsx
│   │   ├── header
│   │   │   ├── Buttons
│   │   │   │   └── HeaderButton.jsx
│   │   │   ├── HeaderCard
│   │   │   │   └── Card.jsx
│   │   │   └── HeaderContainer
│   │   │       ├──header.css
│   │   │       └── Header.jsx
│   │   ├── navbar
│   │   ├── portfolio
│   │   ├── skills
│   │   └── testimonials
│   ├── data
│   │   ├── Links
│   │   │   ├── contactLinks.js
│   │   │   └── socialMedia.js
│   │   ├── Texts
│   │   │   ├── About
│   │   │   │   └── aboutData.js
│   │   │   ├── Contacts
│   │   │   │   └── contactData.js
│   │   │   ├── Header
│   │   │   │   └── headerData.js
│   │   │   ├── Portfolio
│   │   │   │   └── portfolioData.js
│   │   │   ├── Testimonials
│   │   │   │   └── testimonialData.js
│   │   └── utils
│   │       ├── skillsImage.jsx
│   │       ├── skillsTechnologies.jsx
│   │       └── skillsTools.jsx
│   ├── theme
│   │   ├── Dark
│   │   │   ├── NightMode.css
│   │   │   └── NightMode.jsx
│   │   └── Light
│   │       ├── LightMode.css
│   │       └── LightMode.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── README.md
├── .gitignore
├── package.json
└── README.md
```


## Modifying the Website
You only need to modify the contents inside the `src/data` folder and the images inside the `src/assets/images` folder.

## Dependencies
Here are the key dependencies used in this project along with their documentation links:

- [React](https://reactjs.org/) (`react`, `react-dom`)
- [React Scripts](https://create-react-app.dev/docs/getting-started/) (`react-scripts`)
- [EmailJS](https://www.emailjs.com/docs/sdk/installation/) (`@emailjs/browser`, `emailjs`)
- [React Icons](https://react-icons.github.io/react-icons/) (`react-icons`)
- [React Slick](https://react-slick.neostack.com/docs/get-started/) (`react-slick`, `slick-carousel`)
- [Swiper](https://swiperjs.com/react) (`swiper`)
- [Typed.js](https://www.npmjs.com/package/typed.js) (`typed.js`, `typedjs`)
- [gh-pages](https://www.npmjs.com/package/gh-pages) (`gh-pages`)

## Hosting with GitHub Pages

To host your React Portfolio using GitHub Pages, follow these steps:

1. **Install the gh-pages package**
    ```bash
    npm install --save gh-pages
    # or
    yarn add gh-pages
    ```

2. **Add homepage to package.json**
    Add the following line to your `package.json` file:
    ```json
    "homepage": "https://user-name.github.io/repository-name"
    ```

3. **Add deployment scripts to package.json**
    Update your `package.json` file to include the following scripts:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

4. **Deploy the application**
    ```bash
    npm run deploy
    # or
    yarn deploy
    ```

5. **Access your application**
    - Your Portfolio will be published at `https://User-name.github.io/repository-name`.

## Hosting with Other Platforms

You can also host your React Portfolio using other platforms such as Netlify, Vercel, or Heroku. Here are the basic steps:

### Netlify
1. **Create a Netlify account**: Go to [Netlify](https://www.netlify.com) and sign up.
2. **New site from Git**: Click on "New site from Git" and connect your GitHub repository.
3. **Build settings**: Set the build command to `npm run build` and the publish directory to `build`.
4. **Deploy**: Click on "Deploy site" to publish your NotesApp.

### Vercel
1. **Create a Vercel account**: Go to [Vercel](https://vercel.com) and sign up.
2. **New Project**: Click on "New Project" and import your GitHub repository.
3. **Build settings**: Vercel automatically detects the build command and output directory for React apps.
4. **Deploy**: Click on "Deploy" to publish your NotesApp.

### Heroku
1. **Create a Heroku account**: Go to [Heroku](https://www.heroku.com) and sign up.
2. **Create a new app**: Click on "New" and then "Create new app".
3. **Deploy via GitHub**: Connect your GitHub repository to Heroku.
4. **Build settings**: Set the buildpack to `heroku/nodejs`.
5. **Deploy**: Click on "Deploy Branch" to publish your NotesApp.

## Contributing
If you have any suggestions or find any issues, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
