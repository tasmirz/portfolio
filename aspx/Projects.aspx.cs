using System;
using System.Web;
using System.Web.UI;
using System.Collections.Generic;

namespace _71
{
    public partial class Projects : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.AddHeader("Access-Control-Allow-Origin", "*");
            Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            Response.AddHeader("Access-Control-Allow-Headers", "Content-Type");

            Response.ContentType = "application/json";

            var projects = GetProjects();

            string json = "{\"projects\":[";
            for (int i = 0; i < projects.Count; i++)
            {
                var p = projects[i];
                string imageUrl = GenerateProjectImage(p.Name, i);

                string languagesJson = "[";
                for (int j = 0; j < p.Languages.Count; j++)
                {
                    languagesJson += $"\"{HttpUtility.JavaScriptStringEncode(p.Languages[j])}\"";
                    if (j < p.Languages.Count - 1) languagesJson += ",";
                }
                languagesJson += "]";

                json += $@"{{
    ""name"": ""{HttpUtility.JavaScriptStringEncode(p.Name)}"",
    ""description"": ""{HttpUtility.JavaScriptStringEncode(p.Description)}"",
    ""languages"": {languagesJson},
    ""imageUrl"": ""{imageUrl}""
}}";
                if (i < projects.Count - 1) json += ",";
            }
            json += "]}";

            Response.Write(json);
            Response.End();
        }

        private static string GenerateProjectImage(string projectName, int index)
        {
            var colors = new string[]
            {
                "504945/fbf1c7",
                "665c54/fbf1c7",
                "7c6f64/fbf1c7",
                "3c3836/fbf1c7",
                "282828/fbf1c7",
                "458588/fbf1c7"
            };

            int colorIndex = index % colors.Length;
            string encodedName = HttpUtility.UrlEncode(projectName.Replace(" ", "+"));
            return $"https://via.placeholder.com/300x180/{colors[colorIndex]}?text={encodedName}";
        }

        private static List<Project> GetProjects()
        {
            return new List<Project>
            {
                new Project { Name = "kuet-dull-edge", Description = "Repository for team KUET_dull_edge (Learnathon-By-Geeky-Solutions)", Languages = new List<string>{ "TypeScript" } },
                new Project { Name = "Computer Computer", Description = "A 29-bit, 5-stage pipelined RISC computer with dedicated assembler", Languages = new List<string>{ "Jupyter Notebook" } },
                new Project { Name = "calendar-cse1205", Description = "Calendar application (likely course assignment)", Languages = new List<string>{ "C++" } },
                new Project { Name = "rpg-cse1206", Description = "HTML-based RPG game (likely course assignment)", Languages = new List<string>{ "HTML" } },
                new Project { Name = "Strassen-and-Closest-Pair-Point-Algorithm-Analysis", Description = "Analysis of Strassen’s matrix multiplication and closest-pair point-set algorithms", Languages = new List<string>{ "Jupyter Notebook" } },
                new Project { Name = "Terra", Description = "Interactive application collecting data from NASA landslide, real-time precipitation, slope, and terrain sources", Languages = new List<string>{ "JavaScript" } }
            };
        }

        public class Project
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public List<string> Languages { get; set; }
        }
    }
}
