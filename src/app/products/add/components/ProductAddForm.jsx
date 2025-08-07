"use client"
export default function ProductAddForm() {
    const handleForm = async (e) => {
        e.preventDefault();
        const formelement = e.target;
        const name = formelement.name.value;
        const formData = {name};
        const res = await fetch("http://localhost:3000/api/items",{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        formelement.reset();
        alert("Post sent");

    }

  return (
    <div className=" justify-items-center text-center">
        <form className=" space-y-2" onSubmit={handleForm}>
            <div>
                <label className="block" htmlFor="">Product Name</label>
                <input className=" dark:bg-white border-2 border-black text-xl dark:text-black" type="text" name="name"/>
            </div>
            <button className="bg-purple-700 p-2 rounded-2xl" type='submit'>Submit</button>
        </form>
    </div>
  )
}
