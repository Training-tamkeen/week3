
function Form() {

    function validate(e) {
        e.preventDefault()
        if (e.target.name.value == "") {
          alert("Please provide your name!");
          e.target.name.focus();
          return false;
        }
        if (e.target.email.value == "") {
          alert("Please provide your Email!");
          e.target.email.focus();
          return false;
        }
        if (e.target.message.value == "") {
          alert("Please provide a message");
          e.target.message.focus();
          return false;
        }
        return true;
      }

  return (
    <div>
      <h2 id="contact">✉️ Leave a Message</h2>
      <form onSubmit={validate}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter name" name="name" pattern="[a-zA-Z\s]+" title="Only alphabatic allowed" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" name="email" />
        </div>

        <div>
          <br />
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <br />
          <textarea id="message" rows={4} placeholder="Enter message" minLength={8} name="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Form;
