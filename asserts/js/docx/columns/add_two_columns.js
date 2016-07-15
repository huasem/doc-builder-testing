builder.CreateFile("docx");

var Api = editor;
var oDocument     = Api.GetDocument();
oDocument.CreateNewHistoryPoint();

var oFinalSection, oParagraph1, oParagraph2;

oParagraph1 = Api.CreateParagraph();
oFinalSection   = oDocument.GetFinalSection();
oFinalSection.SetEqualColumns(2, 720);
oParagraph1.AddText("First columns");
oParagraph1.AddColumnBreak();
oDocument.Push(oParagraph1);

oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("Second columns");
oDocument.Push(oParagraph2);

builder.SaveFile("docx", "add_two_columns.docx");
builder.CloseFile();