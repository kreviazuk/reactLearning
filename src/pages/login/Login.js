import { getTemporaryToken } from "../../axios/apis/index";
import React, { useState,useEffect } from "react";
import store from "../../store/index";
import './Login.scss'
import UUID from "es6-uuid";
import {useNavigate} from 'react-router-dom'
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "../../axios/apis/index";
import md5 from "md5";
const Login = () => {
  let key = UUID(32);
  //declare count variable
  const [count,setCount] = useState(0)
  const navidate = useNavigate()
  const changeState = () => {
    setCount(count + 1)
  }
  // 临时token
  const tempToken = async () => {
    const res = await getTemporaryToken({ tokenKey: key });
    return res.loginToken;
  };
  //提交表单
  const onFinish = async (values) => {
    console.log("Success:", values);
    const params = {
      loginName: values.username,
      password: md5(values.password),
      tokenKey: key,
      loginToken: await tempToken(),
    };
    console.log(params);
    login(params).then((res) => {

      console.log("login info");
      console.log(res);
      localStorage.setItem("userinfo", JSON.stringify(res.user));
      localStorage.setItem("modules", JSON.stringify(res.userTreeModule));
      localStorage.setItem("token", res.token);
      store.dispatch({
        type:'LOGIN_SUCCESS',
        payload:res
      })
      navidate('/')
    });
  };
  useEffect(() => {
    console.log('initial')
    document.title = `you clicked ${count}times`
    return () => {
        console.log('execute whild component unmount')
    }
  })
  // form failed
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="setState">
        <span>{count}</span>
        <Button type="primary" onClick={changeState}>change count</Button>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
