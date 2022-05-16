<template>
    <div>
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div>
                <div className="py-10">
                    <div>
                        <div className="mb-5 text-center">
                            <div
                                className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset"
                            >
                                <img
                                    id="image"
                                    className="object-cover w-full h-32 rounded-full"
                                    :src="image"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                className="font-bold mb-1 text-gray-700 block"
                                >Username</label
                            >
                            <input
                                type="text"
                                value="uname"
                                disabled
                                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                placeholder="Enter your firstname..."
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="font-bold mb-1 text-gray-700 block"
                                >Email</label
                            >
                            <input
                                type="text"
                                value="uname@gmail.com"
                                disabled
                                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                placeholder="Enter your email address..."
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="font-bold mb-1 text-gray-700 block"
                                >Account created</label
                            >
                            <input
                                type="text"
                                value="2020"
                                disabled
                                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                placeholder="Enter your email address..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
