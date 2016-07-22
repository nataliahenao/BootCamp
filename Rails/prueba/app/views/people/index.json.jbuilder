json.array!(@people) do |person|
  json.extract! person, :id, :nombre, :apellido, :cedula.integer
  json.url person_url(person, format: :json)
end
