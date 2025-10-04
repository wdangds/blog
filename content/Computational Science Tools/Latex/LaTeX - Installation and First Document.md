---
title: LaTeX - Installation and First Document
draft: true
tags:
  - LaTeX
---
## 1. LaTeX and TeXStudio Installation and Setup
- **Installing LaTeX**:
	- Start by installing a **basic distribution of Tex**
	- For **Windows**. use MikTex, proTeXt, or TeX Live.
	- For **Mac**, use MacTeX.
	- Check links on www.latex-project.org page for Linux distributions.

![[fig-latex-install.png]]
- **Installing TeXStudio**:
	- TeXStudio is an **Integrated Development Environment (IDE) for LaTeX**.
	- Downloads are available at www.texstudio.org.
	- After installation, **check the configuration** to ensure MiKTeX (or the LaTeX system) is properly linked with TeXStudio.

![[fig-install-tex.png]]
- **TeXStudio Interface Elements**: Menu Bar and Tools, Document Structure, Compilation Results and messages, Document preview, and LaTeX code for the documents.

![[fig-tex-interface.png]]
## 2. LaTeX Overview and Basics
- **What is LaTeX?**
	- A system for producing **high-quality technical documentation.**
	- Widely used in **academia and scientific publishing**.
	- Offers **precise control over document layout, formatting, and design**.
	- Provides **powerful and mathematical equation support**.
	- **LaTeX is NOT an editor or word processor**.
- **LaTeX Document Basics**:
	- A document preamble **begins with the `\documentclass` command**.
	- The document must include a `\begin{document}` `\end{document}` pair.
	- **Comments** are indicated by `%`.
	- **Extra spaces and line breaks are IGNORED**.
	- **What You See Is What You Get (WYSIWYG) does not apply** to LaTeX.
- **The LaTeX Workflow**:

![[fig-latex-workflow.png]]
## 3. Core Document Components
- **Document Classes**:
	- All LaTeX documents **must have a specified classname**.
	- Used at the beginning of the preamble (e.g., `\documentclass{classname}`).
	- Common classes include: `book`, `report`, `article`, `letter`, `slides`.
- **Class Options**:
	- Control global formatting (e.g., `documentclass[11pt, twoside]{article}`)
	- Examples: `10pt, 11pt (default)`, `12pt` (font size), `letterpaper, a4paper` (paper size), `twocolumn` (two-column format), `twoside` (sets margins for L-R printed output), `landscape` (rotate paper 90 deg), `draft` (double spaced content).
- **Packages**:
	- Import "packages" of predefined commands and settings, useful for standardizing "look and feel" and offering extended features.
	- Indicated in the preamble before `\begin{document}` (e.g., `usepackage{fullpage}`).
	- Examples: `fullpage` (sets 1" margins), `anysize` (manual margin setting), `multicol` (specified number of columns), `latexsym` (LaTeX symbol font), `graphic` (for images), `url` (for URLs).
- **Titles**
	- LaTeX automatically generates title information.
	- Specify data using `\author` and `\title` commands.
	- Use `\\` for new lines within author or title.
	- The title is created using the **`\maketitle` command** within `\begin{document}`.
- **Document Structure:**
	- LaTeX documents conform to a **hierarchical structure**.
	- Sectioning commands automatically keep track of numbering (e.g., `\part`, `\chapter`, `\section`, `\subsection`, `\subsubsection`, `\paragraph`, `\subparagraph`).
	- Numbering can be suppressed using the `*` operator (e.g., `\section*{title}`).
## IV. Text Formatting and Environments
- **Text Environments**:
	- Pre-defined environments for special types of text.
	- Example: `comment`, `quote`, `quotation`, `verse`
	- The default environment is `document`.
- **Lists**:
	- Built-in list formatting environments.
	- `enumerate`: provides a numbered list.
	- `itemize`: provides a bulleted list.
	- `description`: provides a text-based list.
	- Add items using the `\item` command (e.g., `\item text` or `item[label] text` for descriptions).
- **References**:
	- `\label{marker}` is used to declare a reference.
	- `\ref{marker}` is used to invoke the label.
	- `\pageref{marker}` returns the page number where the label was declared.
	- `\footnote{text}` generates a footnote number and text at the page footer.
- **Font Families**:
	- LaTeX supports various font sizes.
	- Example: `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize` (default), `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`.
	- Remember to **restore normal size fonts using** `\normalsize{}`.