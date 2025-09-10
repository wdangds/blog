---
title: 📚 My Library
---
Here is the list of books that I recommended to read (and I will read as well, since it in my coursework)

<p>Use the search box to filter, and click column headers to sort.</p>

<input class="search" placeholder="Search library..." />

<table id="library">
  <thead>
    <tr>
      <th class="sort" data-sort="title">Title ⬍</th>
      <th class="sort" data-sort="author">Author ⬍</th>
      <th class="sort" data-sort="tags">Tags ⬍</th>
      <th class="sort" data-sort="type">Type ⬍</th>
      <th class="sort" data-sort="status">Status ⬍</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody class="list">
    <tr>
      <td class="title">Example Book</td>
      <td class="author">John Doe</td>
      <td class="tags">data science, ML</td>
      <td class="type">Book</td>
      <td class="status">📖 Not Read</td>
      <td><a href="/assets/books/example-book.pdf">PDF</a></td>
    </tr>
    <tr>
      <td class="title">Optimization Paper</td>
      <td class="author">Jane Smith</td>
      <td class="tags">optimization, math</td>
      <td class="type">Article</td>
      <td class="status">✅ Read</td>
      <td><a href="https://arxiv.org/pdf/1234.5678.pdf">External</a></td>
    </tr>
  </tbody>
</table>

<script src="https://cdn.jsdelivr.net/npm/list.js@2.3.1/dist/list.min.js"></script>
<script>
var options = {
  valueNames: ['title', 'author', 'tags', 'type', 'status']
};
var libraryList = new List('library', options);
</script>

