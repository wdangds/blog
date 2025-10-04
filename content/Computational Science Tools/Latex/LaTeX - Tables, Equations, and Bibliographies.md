---
title: LaTeX - Tables, Equations, and Bibliographies
draft: true
tags:
  - LaTeX
---
## 1. Creating and Managing Tables in LaTeX
LaTeX offers robust features for presenting tabular data, with support for both simple and complex table structures.
### a. Basic Table Creation with TeXStudio Tabular Wizard
For simple table, the TeXStudio Tabular Wizard can automatically generated the necessary LaTeX code.
- **Process**: Navigate to "Wizards" -> "Quick Tabular" in TeXStudio. Users can set the number of columns and rows, and then enter data directly.
- **Automation**: The tabular wizard will automatically generate the table code and insert into document.
- **Customization**: Default settings for centering and lines are provided but can be modified as needed.
### b. Manual Creation of Complex Tables
More intricate tables, including those with captions and cross-references, can be created manually using LaTeX formatting commands.
- **Table Environment:** Tables are defined within a `\begin{table}` and `\end{table}` environment. The parameters `[!th]` mean put the table here, even if it's not aesthetically pretty.
- **Tabular Environment**: Inside the table environment, the tabular environment is used to structure the actual table data.
	- **Column Definition**: Parameter like `{|l|l|r|}` define the number of columns (3 in this example), vertical line separators (`|`), and text justification for each column (`l` for left, `r` for right).
	- **Horizontal Lines**: `\hline` command is used to draw horizontal lines between rows.