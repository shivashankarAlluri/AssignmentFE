const WorkDetails = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block font-medium mb-1">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={data.companyName}
          onChange={onChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="designation" className="block font-medium mb-1">
          Designation <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={data.designation}
          onChange={onChange}
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="workLocation" className="block font-medium mb-1">
          Work Location
        </label>
        <input
          type="text"
          id="workLocation"
          name="workLocation"
          value={data.workLocation}
          onChange={onChange}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block font-medium mb-1">
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={data.experience}
          onChange={onChange}
          required
          min={0}
          step={0.1}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Currently Working?</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="currentlyWorking"
              value="Yes"
              checked={data.currentlyWorking === 'Yes'}
              onChange={onChange}
              className="accent-green-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="currentlyWorking"
              value="No"
              checked={data.currentlyWorking === 'No'}
              onChange={onChange}
              className="accent-red-500"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
