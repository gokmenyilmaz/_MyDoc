````
https://www.talksharp.com/entity-framework-projection-queries

// first we create a new class to contain less fields
public class PostRow
{
    public int Id { get; set; }
    public string Title { get; set; }
}

// returns posts with only the Id and Title
var posts = context.Posts.Select(p => new PostRow
{
    Id = p.Id,
    Title = p.Title
}).ToList();

yada anonyus tiplerlerle

var posts = context.Posts.Select(p => new
{
    Id = p.Id,
    Title = p.Title
}).ToList();

````
