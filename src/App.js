import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        username : '',
        password : '',
        alamat : '',
        gender: 0,
        pendidikan: 'S1',
        status: false,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    // console.log(event.target.value); // event adalah apa yang di inputkan, target nya adalah value yang di inputkan
    const target = event.target;
    const name = target.name; //Name berasal dari inputan, txtName dan txtPassword, jadi satu kesatuan
    const value = target.value;
    this.setState({
      // username : event.target.value // YANG AWALNYA SEPERTI INI JIKA HANYA SATU INPUTAN
      [name] : value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();  //Setiap form dengan submit bisa gunakan preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">React Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={ this.onHandleSubmit }> {/* */}
                  <div className="form-group">
                    <label>Username : </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="username" //Ini harus sama dengan State
                      value={ this.state.username }
                      onChange={ this.onHandleChange}
                      />
                  </div>

                  <div className="form-group">
                    <label>Password : </label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password" //Ini harus sama dengan State
                      value={ this.state.password }
                      onChange={ this.onHandleChange}
                      />
                  </div>

                  <div className="form-group">
                    <label>Alamat : </label>
                    <textarea
                    className="form-control" rows="3" 
                    name="alamat" //Ini harus sama dengan State
                    value={ this.state.alamat }
                    onChange={ this.onHandleChange}
                    />
                  </div>

                  <label>Jenis Kelamin : </label>
                  <select
                    className="form-control" 
                    name="gender" 
                    value={ this.state.gender}
                    onChange={ this.onHandleChange}
                    >
                    <option value={0}>Laki-laki</option>
                    <option value={1}>Perempuan</option>
                  </select>
                  <br />

                  <label>Pendidikan</label>
                  <div className="radio">
                    <label>
                      <input 
                        type="radio" 
                        name="pendidikan" 
                        value="S2"
                        checked={ this.state.pendidikan === "S2" }
                        onChange={ this.onHandleChange}
                      />
                      S2
                    </label><br />
                    <label>
                      <input 
                        type="radio" 
                        name="pendidikan" 
                        value="S1"
                        checked={ this.state.pendidikan === "S1" }
                        onChange={ this.onHandleChange}
                      />
                      S1
                    </label><br />
                  </div>
                  
                  <label>Ceklis jika ya : </label>
                  <div className="checkbox">
                    <label>
                      <input 
                        type="checkbox" 
                        name="status" 
                        value={true}
                        onChange={ this.onHandleChange}
                      />
                      Ya
                    </label><br />
                  </div>
                  
                  
                  <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                  <button type="reset" className="btn btn-default">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
