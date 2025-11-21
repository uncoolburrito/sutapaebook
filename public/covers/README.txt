# How to Add Custom Book Covers

1. **Save your image files** in this folder (`public/covers`).
   - Recommended format: JPG or PNG.
   - Recommended size: Portrait orientation (e.g., 600x900 pixels).

2. **Update the book data**:
   - Open `src/data/books.ts`.
   - Find the book you want to update.
   - Change the `coverImage` field to point to your new file.

   **Example:**
   If you added a file named `my-book.jpg` to this folder, update the code like this:

   ```typescript
   {
       id: "1",
       title: "My Book Title",
       // ... other fields
       coverImage: "/covers/my-book.jpg", // <--- Update this line
   }
   ```

3. **Refresh your browser** to see the changes.
