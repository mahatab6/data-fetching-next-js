"use client"
export default function ProductAddForm() {
    const handleForm = (e) => {
        e.PreventDefault();

    }

  return (
    <div>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="">Product Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
