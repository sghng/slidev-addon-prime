param( [string] $FilePath )

Get-Content $FilePath | 
Select-String -AllMatches '(?<=<)([A-Z][A-Za-z]*' | 
ForEach-Object { $_.Matches.Value } |
Sort-Object -Unique
