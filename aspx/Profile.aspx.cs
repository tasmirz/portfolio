using System;
using System.Web;
using System.Web.UI;

namespace _71
{
    public partial class Profile : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.AddHeader("Access-Control-Allow-Origin", "*");
            Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            Response.AddHeader("Access-Control-Allow-Headers", "Content-Type");

            Response.ContentType = "application/json";

            var profileData = GetProfileData();

            Response.Write(profileData);
            Response.End();
        }

        private static string GetProfileData()
        {
            return @"{
  ""name"": ""Tasmir Hossain Zihad"",
  ""title"": ""Full-Stack Developer"",
  ""email"": ""zihad@tuta.io"",
  ""location"": ""Khulna, Bangladesh"",
  ""bio"": ""Full-Stack Developer passionate about creating innovative solutions."",
  ""social"": {
    ""github"": ""https://github.com/tasmirz"",
    ""linkedin"": ""https://linkedin.com/in/tasmirz""
  },
  ""typewriterTexts"": [""Tasmir Hossain Zihad"", ""Full-Stack Developer"", ""Problem Solver""],
  ""aboutDescription"": ""I'm always interested in new opportunities and collaborations. Feel free to reach out!""
}";
        }
    }
}
