---
title: 项目
---


```sh
  
dotnet user-secrets init
  
dotnet user-secrets set ConnectionStrings:TutorialDB "Server=localhost;Database=TutorialDB;User ID=sa;Password=Ikylin62#;Initial Catalog=TutorialDB"  

dotnet ef dbcontext scaffold Name=ConnectionStrings:TutorialDB Microsoft.EntityFrameworkCore.SqlServer -o models 


```