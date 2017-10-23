builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle;
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.AddRow(oTable.GetRow(1).GetCell(0), true);
oDocument.Push(oTable);
builder.SaveFile("docx", "AddRow.docx");
builder.CloseFile();