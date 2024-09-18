![Screenshot 2024-09-18 131901](https://github.com/user-attachments/assets/0a251e89-5eeb-40dc-8439-f19cbac11f3a)



```markdown
# Book Inventory Management System

This is a simple, responsive book inventory management system that allows users to add, filter, and export book data. The system features an intuitive and stylish UI with gradient effects, animations, and responsive design.




## Features

- **Add New Books**: A form to input new book details (title, author, genre, publication date, ISBN) into the inventory.
- **Filter Books**: Search and filter books based on title, author, genre, and other criteria.
- **Export Books**: Export the book inventory as a CSV or JSON file.
- **Responsive Design**: The UI is optimized to work on different screen sizes.
- **Stylish UI**: Gradient background, button hover effects, and animations make the user experience more dynamic.

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Features Overview](#features-overview)
- [Design Decisions](#design-decisions)
- [License](#license)

## Demo

*Optional: Add a link to a live demo or a GIF of the system in action.*

## Technologies Used

- **Frontend**: React.js, CSS (for styling, animations, and responsiveness)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (or MySQL, SQLite based on the setup)
- **Additional Tools**: Axios (for HTTP requests), CSV/JSON export libraries

## Installation

Follow these steps to run the project on your local machine.

### Prerequisites

- Node.js installed on your machine
- PostgreSQL/MySQL/SQLite installed

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-inventory-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd book-inventory-system
   ```

3. Install the frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

4. Install the backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

5. Set up the database:

   - For PostgreSQL, create a new database and update the connection details in the `.env` file.
   - Run the provided SQL scripts to set up the database schema.
   
   ```bash
   psql -U username -d book_inventory -f schema.sql
   ```

6. Start the backend server:

   ```bash
   npm start
   ```

7. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

## Folder Structure

```
book-inventory-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── config.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddBookForm.js
│   │   │   ├── FilterBooks.js
│   │   │   └── ExportBooks.js
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── schema.sql
└── README.md
```

## How to Run

1. Ensure that both the frontend and backend are running.
2. Open your browser and navigate to `http://localhost:3000` to interact with the Book Inventory System.

## API Endpoints

These endpoints are defined for the backend:

- **GET /books**: Fetch all books.
- **POST /books**: Add a new book to the inventory.
- **GET /books/filter**: Filter books based on criteria.
- **GET /books/export/csv**: Export the inventory as CSV.
- **GET /books/export/json**: Export the inventory as JSON.

## Features Overview

### 1. Add New Books

You can add a new book by providing the following details:

- **Title**: The title of the book
- **Author**: The author of the book
- **Genre**: Genre of the book (e.g., Fiction, Non-fiction)
- **Publication Date**: When the book was published
- **ISBN**: The ISBN number of the book

### 2. Filter Books

The system allows you to filter books by:

- **Title**
- **Author**
- **Genre**

### 3. Export Books

Export your book inventory to the following formats:

- **CSV**
- **JSON**

### 4. Responsive UI

The UI is designed to be responsive and works well on mobile, tablet, and desktop devices. Gradient effects, hover animations, and a clean layout are applied for an enhanced user experience.

## Design Decisions

1. **UI/UX**: The UI is designed with a focus on simplicity and user-friendliness, using a gradient background and animations to make the experience interactive.
2. **Backend**: Node.js and Express.js are used to handle API requests, and PostgreSQL is used as the database for storing book data.
3. **Database**: A simple relational schema is used to store book details efficiently, ensuring scalability.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Notes:
- Update the repository URL in the installation steps.
- Optionally add a section with GIFs or screenshots of the project.
- Adjust the `API Endpoints` and `Technologies Used` sections to match your actual implementation.


