param(
  [string]$PartsFolder = ".",
  [string]$OutputZip = "UK_Tourism_media_pack.zip"
)

$parts = Get-ChildItem -Path $PartsFolder -Filter 'UK_Tourism_media_pack.part*' | Sort-Object Name
if(-not $parts){ throw "No parts found in $PartsFolder" }

$out = [System.IO.File]::Create($OutputZip)
try {
  foreach($p in $parts){
    $in = [System.IO.File]::OpenRead($p.FullName)
    try { $in.CopyTo($out) } finally { $in.Dispose() }
  }
} finally { $out.Dispose() }

Write-Host "Merged to $OutputZip"
