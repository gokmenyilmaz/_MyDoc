````
İterator block içerisinde çalışır (Ienumarator dönüşlü)

Compiler geri planda bir iterator oluşturur.
Olşturduğu class İterator block  üzerine attribute olarak tanımlanır ve ilişki öyle sağlanır

[IteratorStateMachine(typeof(<GetEnumerator>d__0))]
public IEnumerator<string> GetEnumerator()
{
    yield return "pt";
    yield return "sa";
}

oluşturdu sınıf aşağıda

[CompilerGenerated]
private sealed class <GetEnumerator>d__0 : IEnumerator<string>, IDisposable, IEnumerator
{
    private int <>1__state;
    private string <>2__current;
    public HaftanınGünleri <>4__this;

    [DebuggerHidden]
    public <GetEnumerator>d__0(int <>1__state)
    {
        this.<>1__state = <>1__state;
    }

    private bool MoveNext()
    {
        switch (this.<>1__state)
        {
            case 0:
                this.<>1__state = -1;
                this.<>2__current = "pt";
                this.<>1__state = 1;
                return true;

            case 1:
                this.<>1__state = -1;
                this.<>2__current = "sa";
                this.<>1__state = 2;
                return true;

            case 2:
                this.<>1__state = -1;
                this.<>2__current = "\x00e7a";
                this.<>1__state = 3;
                return true;

            case 3:
                this.<>1__state = -1;
                return false;
        }
        return false;
    }

    [DebuggerHidden]
    void IEnumerator.Reset()
    {
        throw new NotSupportedException();
    }

    [DebuggerHidden]
    void IDisposable.Dispose()
    {
    }

    string IEnumerator<string>.Current =>
        this.<>2__current;

    object IEnumerator.Current =>
        this.<>2__current;
}
````
