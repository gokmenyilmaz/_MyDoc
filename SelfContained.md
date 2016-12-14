http://www.hanselman.com/blog/SelfcontainedNETCoreApplications.aspx

My app is a .NETCore.App, but it's not going to use the .NET Core platform that's installed.
 It'll use a local version so I'll remove "type="platform"" from this dependency.

"frameworks": {
  "netcoreapp1.0": {
    "dependencies": {
      "Microsoft.NETCore.App": {
        "version": "1.0.1"
      }
    }
  } 
}