import React from "react";
import { Button, Input } from "components/atoms";

const Error: React.FC = () => (
  <div>
    <div className="mobile-container">
      <Input type="search" placeholder="Test" />

      <Button type="submit" color="primary" isLoading>
        Search
      </Button>
    </div>
  </div>
);

export default Error;
