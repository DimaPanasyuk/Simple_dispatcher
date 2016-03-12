<h1>Simple Dispatcher realisation</h1>
<p>Dispatcher allows you to easily use pub/sub mekhanizm.</p>
<h5>To publish some event simply write this code:</h5>

```javascript
dispatcher.pub('your event goes here');</code>
```
<h5>To subscribe some function on your event, simply write this one:</h5>

```javascript
dispatcher.sub('your event goes here', () => {
  
  //Yours function realisation goes here
  console.log('User clicked on button!');
});
```
<h5>You are able to unsubscribe your function from event:</h5>

```javascript
dispatcher.unsub('your event goes here');
```
