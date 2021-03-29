using System;
using System.Collections;
using System.Globalization;
using System.Threading;
using System.Web;
using System.Web.Mvc;


namespace myMethods
{
    public class funcConvert // Gönderilen Veriyi başka bir veri tipine veya fprmuna dönüştürmenizi sağlar..
    {
        public static string Slug(string text, bool isLower) // (ç öğı) -> (c-ogi)
        {
            if (isLower)
            {
                text = text.ToLower().Replace(" ", "-").Replace("ç", "c").Replace("ö", "o").Replace("ş", "s").Replace("ğ", "g").Replace("ü", "u").Replace("ı", "i").Replace(",", "").Replace("`", "").Replace("'", "").Replace("!", "").Replace("?", "").Replace("&", "").Replace("/", "").Replace(".", "").Replace("(", "").Replace(")", "").Replace(":", "").Replace("#", "");
            }
            else
            {
                text = text.Replace(" ", "-").Replace("ç", "c").Replace("ö", "o").Replace("ş", "s").Replace("ğ", "g").Replace("ü", "u").Replace("ı", "i").Replace(",", "").Replace("`", "").Replace("'", "").Replace("!", "").Replace("?", "").Replace("&", "").Replace("/", "").Replace(".", "").Replace("(", "").Replace(")", "").Replace(":", "").Replace("#", "");
            }
            return text;
        }

        public static ArrayList Tags(string text) // String(Apple, Banana, Cherry) -> ArrayList(Apple, Banana, Cherry)
        {
            int getCommaIndex;
            string tag;
            ArrayList tagsList = new ArrayList();

            for (; String.IsNullOrEmpty(text) == false ;)
            {
                
                getCommaIndex = text.IndexOf(",");
                if (getCommaIndex <= -1)
                {
                    tag = text;
                    tagsList.Add(tag);
                    break;
                }
                    tag = text.Substring(0, getCommaIndex);
                    text = text.Replace(tag + ",", "");
                    tagsList.Add(tag);
            }
                return tagsList;
        }

        public static string Canonical(string subDirectory, bool isSSL) // ("people/furkan-1",true) -> ("https://rhinorunner.com/people/furkan-1") 
        {
            string SSL = "http://"; ;
            if (isSSL) { SSL = "https://"; }
            string canonical = SSL + (HttpContext.Current.Request.Url.Host) + subDirectory;
            return (canonical);
            }
        
    }

    public class funcCache // Cache işlemleri
    {
        public static string antiCache() // Bazı server'larda hardcore cache oluyor bu fonksiyonu style-js sonuna çağırarak test aşamasında rahatlık sağlayabilirsin. -> style.css?v234
        {
            string antiCache = "?v" + DateTime.Now.Millisecond.ToString();
            return antiCache;
    }
}

    public class funcLanguage
    {

       
    }

    public class funcHTML // burada HTML componentleri oluşturabiliriz
    {
        public static string tableMail(string dataName,string data, bool color) // Mail gönderirken table oluşturmak için.
        {
            // string tableTag = "<table style=\"font-family: Arial, Helvetica, sans-serif;  border-collapse: collapse;  width: 100%;\"><tr>";
            // string tableTagClose = "</table>";

            string bgcolor = "#fff";
            if (color){ bgcolor = "#f8f8f8";}
            string line = "<tr>" +
               "<td style=\" border: 1px solid #ddd;  padding: 8px;font-weight:bold;background:" + bgcolor + ";\">" + dataName + "</td>" +
               "<td style=\" border: 1px solid #ddd;  padding: 8px;background:" + bgcolor + ";\">" + data + "</td>" +
               "</tr>";
            
            return line;
        }
    }

    public class funcData // Veritabanında veya farklı bir yerden gelen verilerin kontrolünü sağlayıp değiştiremenize olanak tanır.
    {
        public static string getImage(string img) // Veritabanında gelen img değeri boş yada geçersiz ise no-image.png görseli ekranda gösterilir.
        {
            if (img == null || img.Length < 2) {
                img = "/content/images/warn/no-image.png";
            }
            return img;
        }
 
    }
}