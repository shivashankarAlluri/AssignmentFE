const PersonalDetails = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block font-medium mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={data.fullName}
          onChange={onChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      {/* Repeat for other fields with value and onChange */}
      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={onChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={onChange}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="dob" className="block font-medium mb-1">
            Date of Birth
        </label>
        <input
            type="date"
            id="dob"
            name="dob"
            max={new Date().toISOString().split("T")[0]}
            value={data.dob}
            onChange={onChange}
            className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Gender</label>
        <div className="flex gap-4">
          {['Male', 'Female', 'Other'].map((genderOption) => (
            <label key={genderOption} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value={genderOption}
                checked={data.gender === genderOption}
                onChange={onChange}
                className="accent-blue-500"
              />
              {genderOption}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

