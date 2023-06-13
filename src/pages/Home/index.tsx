/* eslint-disable no-alert */
import React, { useState } from "react";
import { Button, Input, FormGroup } from "components/atoms";
import useAPI from "plugins/api";
import { useDispatch } from "react-redux";
import { setUsers } from "plugins/redux/actions/github";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Home: React.FC = () => {
  const { getUsersSearch } = useAPI();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  interface FormValues {
    username: string;
  }  

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
  });
  
  const initialValues: FormValues = {
    username: "",
  };

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const { username } = values;
      // limit data per page is 5, base on test rules
      const response = await getUsersSearch(username, 5);
      const responseData = response.data;
      dispatch(setUsers(responseData.items));
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

        <div className="mt-4">
          <ul className="users">
            <li className="user active">
              <button
                type="button"
                className="user-head"
              >
                <div className="user-name">resitdc</div>
              </button>
              <div className="user-repos">
                <ul>
                  <li></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
