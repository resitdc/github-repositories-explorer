/* eslint-disable no-alert */
import React, { useState } from "react";
import { Button, Input, FormGroup } from "components/atoms";
import { Users } from "components/molecules";
import useAPI from "plugins/api";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, clearAll } from "plugins/redux/actions/github";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { UsersTypes } from "interfaces/github";

const Home: React.FC = () => {
  const { getUsersSearch } = useAPI();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [submitedUsername, setSubmitedUsername] = useState("");
  const users = useSelector((state: RootStateType) => state.githubReducer.users);
  interface FormData {
    username: string;
  }  
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
  });
  
  const initialValues: FormData = {
    username: "",
  };

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const { username } = formData;
      // limit data per page is 5, base on test rules
      const response = await getUsersSearch(username, 5);
      const responseData = response.data;
      dispatch(setUsers(responseData.items));
      setSubmitedUsername(username);
    } catch (err) {
      const error = err as AxiosErrorResponse;
      const responseData = error?.response?.data as Response | undefined;
      if (responseData) {
        // In case backend have a message
      } else {
        alert("Something wrong, try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-4">
      <div className="mobile-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors }) => (
            <Form>
              <FormGroup message={errors.username}>
                <Field
                  as={Input}
                  type="search"
                  placeholder="Enter username"
                  name="username"
                  disabled={isLoading}
                />
              </FormGroup>
      
              <Button
                type="submit"
                color="primary"
                full
                isLoading={isLoading}
                className="mt-2"
              >
                Search
              </Button>
            </Form>
          )}
        </Formik>
        {
          submitedUsername &&
          <div className="color-black-2 py-2">Showing users for "{submitedUsername}"</div>
        }
        <div className="mt-2">
          {
            users.length === 0 && submitedUsername &&
            <h2 className="text-center color-red">NO USER FOUND</h2>
          }
          <Users
            data={users.map((user: UsersTypes) => ({
              id: user.id,
              username: user.login
            }))}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
