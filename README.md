<h1>Simple Dispatcher realisation</h1>
<p>Dispatcher allows you to easily use pub/sub mekhanizm.</p>
<h5>To publish some event simply write this code:</h5>
<code>dispatcher.pub('your event goes here');</code>
<h5>To subscribe some function on your event, simply write this one:</h5>
<code><pre>dispatcher.sub('your event goes here', () => {
             //Yours function realisation goes here
             console.log('User clicked on button!');
          });
</pre>
</code>
<h5>You are able to unsubscribe your function from event:</h5>
<code>dispatcher.unsub('your event goes here');</code>
