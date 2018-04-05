### Database Generate Id hangi katmanda?
https://github.com/VaughnVernon/IDDD_Samples_NET/blob/master/iddd_collaboration/Domain.Model/Forums/Discussion.cs
````
public Post Post(ForumIdentityService forumIdService, Author author, string subject, string bodyText, PostId replyToPostId = null)
        {
            return new Post(
                this.tenantId,
                this.forumId,
                this.discussionId,
                forumIdService.GetNexPostId(),
                author,
                subject,
                bodyText,
                replyToPostId);
        }

````
### Joinli yeni sorgular hangi katman
### INotifyPropertychanged, ObservableCollection,Validation uygun katman
### Id ye karşılık gelen nav property lerin gösterimi(ilkod,iladı)
### Domain events altyapısının anlşılması
### CORS nedir?
### Folder Structure 
### Bounded Context?
### PersistentIgnorance?
