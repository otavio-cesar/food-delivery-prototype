using backend_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace backend_api.Services
{
    public static  class UserService
    {
        public static  User Get(string username, string password)
        {
            var users = new List<User>();
            users.Add(new User { Id = 1, Username = "batman", Password = "batman", Role = "manager" });
            users.Add(new User { Id = 2, Username = "robin", Password = "robin", Role = "employee" });
            return users.Where(x => x.Username.ToLower() == username.ToLower() && x.Password == x.Password).FirstOrDefault();
        }
    }

}
