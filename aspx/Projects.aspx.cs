using System;
using System.Web;
using System.Web.UI;

namespace _71
{
    public partial class Profile : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.ContentType = "application/json";
            Response.Write(@"{
  ""projects"": [
    {
      ""name"": ""kuet-dull-edge"",
      ""description"": ""Repository for team KUET_dull_edge (Learnathon-By-Geeky-Solutions)"",
      ""languages"": [""TypeScript""]
    },
    {
      ""name"": ""Computer Computer"",
      ""description"": ""A 29-bit, 5-stage pipelined RISC computer with dedicated assembler"",
      ""languages"": [""Jupyter Notebook""]
    },
    {
      ""name"": ""calendar-cse1205"",
      ""description"": ""Calendar application (likely course assignment)"",
      ""languages"": [""C++""]
    },
    {
      ""name"": ""rpg-cse1206"",
      ""description"": ""HTML-based RPG game (likely course assignment)"",
      ""languages"": [""HTML""]
    },
    {
      ""name"": ""Strassen-and-Closest-Pair-Point-Algorithm-Analysis"",
      ""description"": ""Analysis of Strassen’s matrix multiplication and closest-pair point-set algorithms"",
      ""languages"": [""Jupyter Notebook""]
    },
    {
      ""name"": ""Terra"",
      ""description"": ""Interactive application collecting data from NASA landslide, real-time precipitation, slope, and terrain sources"",
      ""languages"": [""JavaScript""]
    }
  ]
}");
            Response.End();
        }
    }
}