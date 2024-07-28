import { myAxios } from "./axios";

const loginAdmin = (username:string, password:string) => {
  return myAxios
    .post("admin/login", {
      username: username,
      password: password,
    })
    .then(function (response) {
      if(response.status == 200){
        sessionStorage.setItem("Token",response.data.token)
        sessionStorage.setItem("name",response.data.user.name)
        sessionStorage.setItem("email",response.data.user.email)
        sessionStorage.setItem("phone",response.data.user.phone)
        sessionStorage.setItem("avatar",response.data.user.avatar)
        sessionStorage.setItem("createdAt",response.data.user.createdAt)
        sessionStorage.setItem("address",response.data.user.address)
        return response.data.token;
      }else{
        return null
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const danhSachNguoiDung = (code:string) =>{
  return myAxios.get(`users/role?code=${code}`,{headers:
    {
      "Authorization": `Bearer ${sessionStorage.getItem("Token")}`
    }
  }).
  then(function (response) {
    if(response.status == 200){
      console.log(response.data);
      return response.data
    }else{
      return null
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

  const updateStatus = (email:string,phone:string,status:any) =>{
    return myAxios.post(`users/update-status`,{
      email: email,
      phone: phone,
      status: status
    },{headers:
      {
        "Authorization": `Bearer ${sessionStorage.getItem("Token")}`
      }
    }).
    then(function (response) {
      if(response.status == 201){
        return response
      }else{
        return null
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

export {loginAdmin,danhSachNguoiDung,updateStatus};