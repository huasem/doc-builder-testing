builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
builder.SaveFile("pptx", "AddSlide.pptx");
builder.CloseFile();
