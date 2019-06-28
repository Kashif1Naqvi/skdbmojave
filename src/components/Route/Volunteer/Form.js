import React from 'react'

export default function Form() {
    return (
        <form className="form form-horizontal " onSubmit={e => e.preventDefault()}>
                    <label className="text-muted" htmlFor="name">Name*</label>
                    <div className="row">
                        <div className="col">
                            <input required type="text" className="form-control" />
                            <label className="text-muted" htmlFor="first">First Name</label>
                        </div>
                        <div className="col">
                            <input required type="text" className="form-control"/>
                            <label className="text-muted" htmlFor="last">Last Name</label>
                        </div><br/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted" htmlFor="Email">Email Address *</label>
                        <input required type="text"   className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted" htmlFor="Email">Subject *</label>
                        <input required type="text"   className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted" htmlFor="Email">Message *</label>
                        <textarea className="form-control" cols="30" rows="5"></textarea>
                    </div>
                    <button className="btn btn-outline-secondary ">Submit</button>
        </form >
    )
}
