# Web Dev Clone

## Introduction
Web Dev Clone is a web development project that replicates the essential functionalities of a modern web platform. It includes a backend built with PHP and a frontend powered by JavaScript and CSS. This project is structured to help developers understand and work with a full-stack web application.

## Features
- **Dynamic Backend:** PHP-powered backend for handling requests.
- **Modern Frontend:** Uses JavaScript, HTML, and CSS for an interactive user experience.
- **WordPress Integration:** Public WordPress directory included.
- **Organized File Structure:** Clear separation of backend, frontend, and dependencies.

## File Structure
```
web-dev-clone/
│-- .vscode/            # VS Code settings
│-- backend/            # PHP backend files
│-- node_modules/       # Node.js dependencies
│-- public/wordpress/   # WordPress-related files
│-- src/                # Source code (JS, CSS, HTML)
│-- index.html          # Main entry point
│-- package.json        # Project metadata
│-- README.md           # Documentation
```

## Installation
### Prerequisites
Make sure you have the following installed:
- PHP
- Node.js & npm
- A local server (XAMPP, WAMP, or MAMP)

### Steps to Clone and Run
1. Clone the repository:
   ```bash
   git clone https://github.com/priyanshu324/web-dev-clone.git
   cd web-dev-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local server and configure PHP backend:
   - Place the `backend/` folder inside your server's public directory (e.g., `htdocs` for XAMPP).
   - Start the Apache and MySQL servers.
4. Open `index.html` in your browser or use Live Server in VS Code.

## Sample Code Snippets
### Example: PHP Backend (backend/index.php)
```php
<?php
header("Content-Type: application/json");
echo json_encode(["message" => "Welcome to Web Dev Clone!"]);
?>
```

### Example: JavaScript Fetch Request
```js
fetch('backend/index.php')
  .then(response => response.json())
  .then(data => console.log(data.message));
```

## Contributing
Feel free to fork the repository, submit pull requests, or suggest features.

## License
This project is open-source and available under the MIT License.

## Contact
For questions or suggestions, reach out to [Priyanshu Saini](https://github.com/priyanshu324).
