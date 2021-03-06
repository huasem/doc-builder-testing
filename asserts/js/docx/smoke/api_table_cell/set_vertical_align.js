builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oTable, oTableStyle, oCell, oTableRow;
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTableRow = oTable.GetRow(0);
oTableRow.SetHeight("atLeast", 1440);
oCell = oTable.GetRow(0).GetCell(0);
oCell.SetVerticalAlign("top");
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Align top");
oCell = oTable.GetRow(0).GetCell(1);
oCell.SetVerticalAlign("center");
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Align center");
oCell = oTable.GetRow(0).GetCell(2);
oCell.SetVerticalAlign("bottom");
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Align bottom");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetVerticalAlign.docx");
builder.CloseFile();
