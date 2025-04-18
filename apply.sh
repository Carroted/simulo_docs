rm -rf docs;
mkdir -p docs/api;
cp -r ../simulo/lua_docs/* ./docs/api/;
# Move contents from autogenerated folder to parent api folder
if [ -d "docs/api/autogenerated" ]; then
    # Copy all contents recursively, overwriting if necessary
    cp -r docs/api/autogenerated/* docs/api/
    # Remove the autogenerated directory after successful copy
    rm -rf docs/api/autogenerated
fi