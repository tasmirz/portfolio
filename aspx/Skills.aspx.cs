using System;
using System.Web;
using System.Web.UI;
using System.Collections.Generic;

namespace _71
{
    public partial class Skills : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.AddHeader("Access-Control-Allow-Origin", "*");
            Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            Response.AddHeader("Access-Control-Allow-Headers", "Content-Type");

            Response.ContentType = "application/json";

            var skillCategories = GetSkillCategories();

            string json = "{\"skillCategories\":[";
            for (int i = 0; i < skillCategories.Count; i++)
            {
                var category = skillCategories[i];
                
                string skillsJson = "[";
                for (int j = 0; j < category.Skills.Count; j++)
                {
                    skillsJson += $"\"{HttpUtility.JavaScriptStringEncode(category.Skills[j])}\"";
                    if (j < category.Skills.Count - 1) skillsJson += ",";
                }
                skillsJson += "]";

                json += $@"{{
    ""name"": ""{HttpUtility.JavaScriptStringEncode(category.Name)}"",
    ""skills"": {skillsJson}
}}";
                if (i < skillCategories.Count - 1) json += ",";
            }
            json += "]}";

            Response.Write(json);
            Response.End();
        }

        private static List<SkillCategory> GetSkillCategories()
        {
            return new List<SkillCategory>
            {
                new SkillCategory 
                { 
                    Name = "Programming", 
                    Skills = new List<string> { "C++", "C", "Python", "PHP", "SQL", "CSS", "JavaScript", "TypeScript" } 
                },
                new SkillCategory 
                { 
                    Name = "Technology", 
                    Skills = new List<string> { "Git", "Linux", "Web App Dev", "ASP.NET", "Node.js", "Docker" } 
                },
                new SkillCategory 
                { 
                    Name = "Software", 
                    Skills = new List<string> { "Blender", "Inkscape", "Illustrator", "Photoshop", "GIMP", "VS Code" } 
                }
            };
        }

        public class SkillCategory
        {
            public string Name { get; set; }
            public List<string> Skills { get; set; }
        }
    }
}
