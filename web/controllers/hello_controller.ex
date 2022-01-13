defmodule Hello.HelloController do
  use Hello.Web, :controller

  def world(conn, %{"name" => name}) do
    render conn, "world.html" , name: name
  end

  def show(conn, _param) do
    conn
    |> json(%{name: "Nilu", age: 23})
  end
end
