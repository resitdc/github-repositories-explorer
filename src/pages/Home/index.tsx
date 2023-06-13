import React from "react";
import { Button } from "components/atoms";

const Error: React.FC = () => (
  <div>
    <div>
      <input type="search" name="" />

      <Button type="submit" color="primary" isLoading>
        Search
      </Button>
    </div>
  </div>
);

export default Error;
