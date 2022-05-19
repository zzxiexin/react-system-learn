### 优缺点分析及解决:

#### 优点: 可以直接在深层次嵌套组件内传递数据

#### 缺点: 组件不容易复用，比如: class 组件需要通过定义 static 属性去消费 provider 提供的 value，同样 function 需要通过回调函数去消费值，意味着想要复用消费组件，必须提供同样的 provider 和其 value。

#### 解决方案: 尽量不选用此方案去传递值，对于深层次的值得传递，可以通过把需要使用 props 值得深层组件提到给其传递值的组件中去，然后通过 props 传递该组件的形式去解决，如果该深层组件还需要和使用其的父组件交流的话，可以通过 render props 的形式去解决。代码如下:

```javascript
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  const topBarRender = (args) => (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} args={...args}/>
      </Link>
    </NavigationBar>
  );
  return <PageLayout value={value} topBar={topBar} content={content} render={(innerArgs) => topBarRender(innerArgs)}/>;
}
```

通过案例可以看到, react props 强大功能, 可以传值、传组件、传函数等等
