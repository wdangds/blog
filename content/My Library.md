---
title: 📚 My Library
---
# 📚 My Library

<div id="library">
  <p>Type to filter, click a column header to sort.</p>

  <input class="search" placeholder="Search library…" />

  <table>
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
        <td class="status">Not Read</td>
        <td><a href="/assets/books/example-book.pdf">PDF</a></td>
      </tr>
      <tr>
        <td class="title">Optimization Paper</td>
        <td class="author">Jane Smith</td>
        <td class="tags">optimization, math</td>
        <td class="type">Article</td>
        <td class="status">Read</td>
        <td><a href="https://arxiv.org/pdf/1234.5678.pdf">External</a></td>
      </tr>
      <!-- Add more rows here -->
    </tbody>
  </table>
</div>

<!-- List.js (client-side sorting/filtering) -->
<script src="https://cdn.jsdelivr.net/npm/list.js@2.3.1/dist/list.min.js"></script>
<script>
  // Initialize after page loads
  document.addEventListener('DOMContentLoaded', function () {
    var options = {
      valueNames: ['title', 'author', 'tags', 'type', 'status']
    };
    // 'library' is the wrapper DIV id
    new List('library', options);
  });
</script>