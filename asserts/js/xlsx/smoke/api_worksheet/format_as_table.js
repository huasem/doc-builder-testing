builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.FormatAsTable("A1:E10");
builder.SaveFile("xlsx", "FormatAsTable.xlsx");
builder.CloseFile();
