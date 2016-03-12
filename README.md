<h1>Simple Dispatcher realisation</h1>
<p>Dispatcher allows you to easily use pub/sub mechanizm.</p>
<h5>To use dispatcher, copy it from app/js, paste in your project and write next in your code</h5>

```javascript
import dispatcher from 'path/to/dispatcher';
```
<h5>To publish some event simply write this code:</h5>

```javascript
dispatcher.pub('your event goes here');
```
<h5>To subscribe some function on your event, simply write this one:</h5>

```javascript
dispatcher.sub('your event goes here', () => {
  
  //Yours function realisation goes here
  console.log('User clicked on button!');
});
```
<h5>You are able to delete your event</h5>

```javascript
dispatcher.unsub('your event goes here');
```
